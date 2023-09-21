import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mataverse',
  templateUrl: './mataverse.component.html',
  styleUrls: ['./mataverse.component.css'],
})
export class MataverseComponent implements OnInit {
  hoveredImageOne: string;
  hoveredImageTwo: string;
  hoveredImageThree: string;
  hoveredItem: { heading: string; content: string }[] = [
    {
      heading: `Gaming & Entertainment`,
      content: `
    In a world of endless possibilities, our fine hand's code magic
    that extends and imparts more fun-filled showcases through an
    immersive environment. This time-effective and revenue-generating
    space are of high interest among users, there are wider openings
    to explore in the genre.`,
    },
    {
      heading: `More Than Existence`,
      content: `
    With almost opportunities and abilities present beyond reality,
    our Metaverse Blockchain development service infuses high-end
    technology to render real-time experiences for users to explore
    and progress. Breeding immersive experience, the user can interact
    in real-time.`,
    },
    {
      heading: `AR and VR`,
      content: `
    One unique ability is the on-time service that we extend alongside
    vitalizing cutting-edge technology to generate AR and VR exponents
    in the ecosystem that are built on powerful gaming engines. The
    additional VR and AR devices enhance performance and experience.`,
    },
  ];
  currentlyhoveredItem: { heading: string; content: string };

  constructor() {}

  ngOnInit(): void {
    this.currentlyhoveredItem = this.hoveredItem[0];
  }

  onMouseEnter(url: string, section: number, subSection: number) {
    if (subSection === 1) {
      this.currentlyhoveredItem = this.hoveredItem[0];
    } else if (subSection === 2) {
      this.currentlyhoveredItem = this.hoveredItem[1];
    } else {
      this.currentlyhoveredItem = this.hoveredItem[2];
    }
    switch (section) {
      case 1:
        this.hoveredImageOne = url;
        break;
      case 2:
        this.hoveredImageTwo = url;

        break;
      case 3:
        this.hoveredImageThree = url;
        break;
      default:
        break;
    }
  }
  onMouseLeave(url: string, section: number) {
    switch (section) {
      case 1:
        this.hoveredImageOne = url;
        this.currentlyhoveredItem = this.hoveredItem[0];

        break;
      case 2:
        this.hoveredImageTwo = url;
        this.currentlyhoveredItem = this.hoveredItem[0];

        break;
      case 3:
        this.hoveredImageThree = url;
        this.currentlyhoveredItem = this.hoveredItem[0];

        break;
      default:
        break;
    }
  }
}
