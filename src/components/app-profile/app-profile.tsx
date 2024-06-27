import { Component, Prop, h } from '@stencil/core';
import { BBox } from 'geojson';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {

  @Prop() bbox: BBox;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    return <h2>Here</h2>
  }
}
