import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-multifunctional-nft",
  templateUrl: "./multifunctional-nft.component.html",
  styleUrls: ["./multifunctional-nft.component.css"],
})
export class MultifunctionalNftComponent implements OnInit {
  title = "Take a look at Multifunctional Fractionalization NFTs";
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
        "NFTs have been around for a while, and fractionalization NFTs are a smart choice. The exposure they bring to this new asset class will help accelerate NFT adoption.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "fractionalization of nfts , fractionalized nfts, the best nfts, fractionalized nft ownership",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Take a look at Multifunctional Fractionalization NFTs",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/multifunctional-fractionalization-nft",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "NFTs have been around for a while, and fractionalization NFTs are a smart choice. The exposure they bring to this new asset class will help accelerate NFT adoption.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/multifunctional-fractionalization-nft's.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/multifunctional-fractionalization-nft",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Take a look at Multifunctional Fractionalization NFTs",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "NFTs have been around for a while, and fractionalization NFTs are a smart choice. The exposure they bring to this new asset class will help accelerate NFT adoption.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/multifunctional-fractionalization-nft's.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/multifunctional-fractionalization-nft"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/multifunctional-fractionalization-nft"
    );
    this.doc.head.appendChild(link);
  }
}
