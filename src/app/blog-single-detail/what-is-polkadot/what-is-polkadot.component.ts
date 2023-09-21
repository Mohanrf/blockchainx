import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-what-is-polkadot",
  templateUrl: "./what-is-polkadot.component.html",
  styleUrls: ["./what-is-polkadot.component.css"],
})
export class WhatIsPolkadotComponent implements OnInit {
  title = "Polkadot, pushing the frontier of blockchain technology";
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
        "Ever wondered what the Polkadot blockchain really is and why it’s different? Here, we give you Polkadot explained where we cover all its features. Read it now to learn more.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "Polkadot blockchain Explained, Polkadot explained, what is polkadot, what is polkadot blockchain technology",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Polkadot, pushing the frontier of blockchain technology",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/what-is-polkadot-blockchain-technology",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Ever wondered what the Polkadot blockchain really is and why it’s different? Here, we give you Polkadot explained where we cover all its features. Read it now to learn more.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/polkadot.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/what-is-polkadot-blockchain-technology",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Polkadot, pushing the frontier of blockchain technology",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Ever wondered what the Polkadot blockchain really is and why it’s different? Here, we give you Polkadot explained where we cover all its features. Read it now to learn more.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/polkadot.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/what-is-polkadot-blockchain-technology"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/what-is-polkadot-blockchain-technology"
    );
    this.doc.head.appendChild(link);
  }
}
