import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-security-tips",
  templateUrl: "./nft-security-tips.component.html",
  styleUrls: ["./nft-security-tips.component.css"],
})
export class NftSecurityTipsComponent implements OnInit {
  title =
    " Find Security tips and best practices for 2023 that you need to protect NFTs.";
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
        "Following these NFT security tips and best practices will lead you to securing NFTs, protecting your digital assets, and identifying common NFT scams.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "nft security token, nft security issues, security nfts, nft security, private security tips",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        " Find Security tips and best practices for 2023 that you need to protect NFTs.",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/nft-security-tips-and-best-practices",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Following these NFT security tips and best practices will lead you to securing NFTs, protecting your digital assets, and identifying common NFT scams.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/NFT-practices.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/nft-security-tips-and-best-practices",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        " Find Security tips and best practices for 2023 that you need to protect NFTs.",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Following these NFT security tips and best practices will lead you to securing NFTs, protecting your digital assets, and identifying common NFT scams.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/NFT-practices.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/nft-security-tips-and-best-practices"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/nft-security-tips-and-best-practices"
    );
    this.doc.head.appendChild(link);
  }
}
