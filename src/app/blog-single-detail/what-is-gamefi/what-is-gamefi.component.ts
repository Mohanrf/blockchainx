import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-what-is-gamefi",
  templateUrl: "./what-is-gamefi.component.html",
  styleUrls: ["./what-is-gamefi.component.css"],
})
export class WhatIsGamefiComponent implements OnInit {
  title = "What is GameFi? Diving into the world of Blockchain Games";
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    @Inject(DOCUMENT) private doc: Document
  ) {}
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: "description",
      content:
        "Are you wondering what blockchain games are all about? Learn everything about GameFi in our introduction to play-to-earn blockchain gaming. Read now.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "What is GameFi, introduction to play-to-earn, blockchain games, blockchain games play to earn, play to earn games",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "What is GameFi? Diving into the world of Blockchain Games",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/what-is-gamefi",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Are you wondering what blockchain games are all about? Learn everything about GameFi in our introduction to play-to-earn blockchain gaming. Read now.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/what-is-gamefi.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/what-is-gamefi",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "What is GameFi? Diving into the world of Blockchain Games",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Are you wondering what blockchain games are all about? Learn everything about GameFi in our introduction to play-to-earn blockchain gaming. Read now.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/what-is-gamefi.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/what-is-gamefi"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/what-is-gamefi"
    );
    this.doc.head.appendChild(link);
  }
}
