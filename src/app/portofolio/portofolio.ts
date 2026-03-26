import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import type { Engine } from '@tsparticles/engine';
import { loadFireflyPreset } from '@tsparticles/preset-firefly';

@Component({
  selector: 'app-portofolio',
  imports: [NgxParticlesModule],
  templateUrl: './portofolio.html',
  styleUrl: './portofolio.css',
})
export class Portofolio {
  particlesId = 'tsparticles';

  particlesOptions = {
    preset: 'firefly',
  };

  particlesInit = async (engine: Engine): Promise<void> => {
    await loadFireflyPreset(engine);
  };

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}