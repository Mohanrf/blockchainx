import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-phygital-nft",
  templateUrl: "./phygital-nft.component.html",
  styleUrls: ["./phygital-nft.component.css"],
})
export class PhygitalNftComponent implements OnInit {
  title = "Understanding Phygital NFTs with Example: Everything to Know.";
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
        "Phygital NFTs have paved the way for additional NFT usage by extending their usefulness into the physical world. The concept of backing NFTs with physical assets can be extended to various capacities as brands see fit. Phygital NFTs is an exciting and potentially game-changing development in the world of digital ownership and trading. Go through this blog to know more.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "understanding-phygital-nfts, phygital nft marketplace, what is phygital nft, phygital nft example",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Understanding Phygital NFTs with Example: Everything to Know.",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/guide-to-phygital-nfts",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Phygital NFTs have paved the way for additional NFT usage by extending their usefulness into the physical world. The concept of backing NFTs with physical assets can be extended to various capacities as brands see fit. Phygital NFTs is an exciting and potentially game-changing development in the world of digital ownership and trading. Go through this blog to know more.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/Everything-to-know-about-phygital-nft.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/guide-to-phygital-nfts",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Understanding Phygital NFTs with Example: Everything to Know.",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Phygital NFTs have paved the way for additional NFT usage by extending their usefulness into the physical world. The concept of backing NFTs with physical assets can be extended to various capacities as brands see fit. Phygital NFTs is an exciting and potentially game-changing development in the world of digital ownership and trading. Go through this blog to know more.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/Everything-to-know-about-phygital-nft.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/guide-to-phygital-nfts"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/guide-to-phygital-nfts"
    );
    this.doc.head.appendChild(link);
  }
}
