import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-what-is-defi",
  templateUrl: "./what-is-defi.component.html",
  styleUrls: ["./what-is-defi.component.css"],
})
export class WhatIsDefiComponent implements OnInit {
  title = "What is DeFi? - A new revolution in Fintech Industry";
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
        "Decentralized Finance protocol: Beginner's Guide, To know more about DeFi an open-source Financial ecosystem where you build various small financial tools and services in a decentralized platform",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "hyperledger, hyperledger fabric, blockchain framework, blockchain,Blockchain Platform, IBM, Linux Foundation",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "What is DeFi? - A new revolution in Fintech Industry",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/what-is-defi-centralized-finance",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Decentralized Finance protocol: Beginner's Guide, To know more about DeFi an open-source Financial ecosystem where you build various small financial tools and services in a decentralized platform",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/defi.webp",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/what-is-defi-centralized-finance",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "What is DeFi? - A new revolution in Fintech Industry",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Decentralized Finance protocol: Beginner's Guide, To know more about DeFi an open-source Financial ecosystem where you build various small financial tools and services in a decentralized platform",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/defi.webp",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/what-is-defi-centralized-finance"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/what-is-defi-centralized-finance"
    );
    this.doc.head.appendChild(link);
  }
}
