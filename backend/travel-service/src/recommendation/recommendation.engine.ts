import { Injectable } from '@nestjs/common';
import { ItineraryGenerator } from './itinerary.generator';

const itineraryGen = new ItineraryGenerator();

@Injectable()
export class RecommendationEngine {
  process(dto, destinations) {
    const dailyBudget = dto.budget / dto.days;
    const round = (n: number) => Math.round(n);

    const budgetPlan = {
      food: round(dailyBudget * 0.3),
      transport: round(dailyBudget * 0.2),
      attraction: round(dailyBudget * 0.3),
      accommodation: round(dailyBudget * 0.15),
      misc: round(dailyBudget * 0.05),
    };

    const tripType =
      dto.days <= 3
        ? 'Compact Trip'
        : dto.days <= 5
        ? 'Balanced Trip'
        : 'Slow & Explore Trip';

    // Hitung skor SAW untuk semua destinasi
    const scoredDestinations = destinations.map((dest) => {
      let score = 0;

      // Kriteria 1: Pencocokan Kategori (Bobot: 40)
      if (dto.categories && dto.categories.some((c) => dest.categories.includes(c))) {
        score += 40;
      }

      // Kriteria 2: Kesesuaian Anggaran Harian (Bobot: 30)
      if (dest.estimatedDailyBudget <= dailyBudget) {
        score += 30;
      }

      // Kriteria 3: Kota Preferensi (Bobot: 30)
      if (dto.city && dest.city.toLowerCase().includes(dto.city.toLowerCase())) {
        score += 30;
      }

      const itineraryResult = itineraryGen.generate(dest.city, dto.days);

      return {
        ...dest,
        score,
        dailyBudget,
        budgetPlan,
        itineraryType: tripType,
        itinerary: itineraryResult,
        explanation: `${tripType} dengan skor SAW ${score}/100 – kecocokan terbaik untuk gaya perjalanan ${(dto.categories || []).join(', ')}`,
      };
    });

    // Urutkan berdasarkan skor tertinggi (Ranked Descending)
    scoredDestinations.sort((a, b) => b.score - a.score);

    // Ambil hasil terbaik
    const bestMatch = scoredDestinations[0];

    return {
      ...bestMatch,
      rankings: scoredDestinations.map((d, index) => ({
        rank: index + 1,
        city: d.city,
        score: d.score,
        estimatedDailyBudget: d.estimatedDailyBudget,
        categories: d.categories,
      })),
    };
  }
}