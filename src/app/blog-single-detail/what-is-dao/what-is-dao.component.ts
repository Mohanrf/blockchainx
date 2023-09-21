import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-what-is-dao",
  templateUrl: "./what-is-dao.component.html",
  styleUrls: ["./what-is-dao.component.css"],
})
export class WhatIsDaoComponent implements OnInit {
  title = "NFTs and DAOs : How do they intervene?";
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
        "Decentralized Autonomous Organizations (DAOs) have been around for a while in the blockchain space, but what happens when you integrate a DAO in NFTs? Let us explore that.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Nft dao, NFTs and DAOs, best nft dao, DAO in Nft",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "NFTs and DAOs : How do they intervene?",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/dao-in-nft",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Decentralized Autonomous Organizations (DAOs) have been around for a while in the blockchain space, but what happens when you integrate a DAO in NFTs? Let us explore that.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/use-cases-of-DeFi.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/dao-in-nft",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "NFTs and DAOs : How do they intervene?",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Decentralized Autonomous Organizations (DAOs) have been around for a while in the blockchain space, but what happens when you integrate a DAO in NFTs? Let us explore that.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/use-cases-of-DeFi.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/dao-in-nft"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute("href", "https://www.blockchainx.tech/amp/dao-in-nft");
    this.doc.head.appendChild(link);
  }
}
