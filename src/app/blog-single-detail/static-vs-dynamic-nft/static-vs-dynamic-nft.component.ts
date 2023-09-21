import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-static-vs-dynamic-nft",
  templateUrl: "./static-vs-dynamic-nft.component.html",
  styleUrls: ["./static-vs-dynamic-nft.component.css"],
})
export class StaticVsDynamicNftComponent implements OnInit {
  title = "The Complete Guide: Static NFTs vs. Dynamic NFTs";
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
        "Which one is right, Static vs dynamic NFT? While both Static NFTs and Dynamic NFTs have unique benefits, they also have different risks and rewards. This will examine the differences between these two types of NFTs and assist you in determining which is best for you.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Static VS Dynamic NFTs, static nfts, Dynamic nfts",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "The Complete Guide: Static NFTs vs. Dynamic NFTs",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/static-nfts-vs-dynamic-nfts",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Which one is right, Static vs dynamic NFT? While both Static NFTs and Dynamic NFTs have unique benefits, they also have different risks and rewards. This will examine the differences between these two types of NFTs and assist you in determining which is best for you.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/Static-vs.-Dynamic-NFTs.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/static-nfts-vs-dynamic-nfts",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "The Complete Guide: Static NFTs vs. Dynamic NFTs",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Which one is right, Static vs dynamic NFT? While both Static NFTs and Dynamic NFTs have unique benefits, they also have different risks and rewards. This will examine the differences between these two types of NFTs and assist you in determining which is best for you.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/Static-vs.-Dynamic-NFTs.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/static-nfts-vs-dynamic-nfts"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/static-nfts-vs-dynamic-nfts"
    );
    this.doc.head.appendChild(link);
  }
}
