import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-used-in-defi",
  templateUrl: "./nft-used-in-defi.component.html",
  styleUrls: ["./nft-used-in-defi.component.css"],
})
export class NftUsedInDefiComponent implements OnInit {
  title = "How are NFTs used In DeFi (Decentralized Finance)?";
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
        "NFTs and DeFi are closely related and have a lot to offer. Using NFTs in Decentralized finance opens doors to endless possibilities. Read on to find out how.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "NFT help in DeFi, NFTs be used in DeFi, How to use NFTs in DeFi, Using NFTs in Decentralized Finance, Combining NFTs with DeFi.",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "How are NFTs used In DeFi (Decentralized Finance)?",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/how-are-nfts-used-in-defi",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "NFTs and DeFi are closely related and have a lot to offer. Using NFTs in Decentralized finance opens doors to endless possibilities. Read on to find out how.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/nft-in-defi.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/how-are-nfts-used-in-defi",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "How are NFTs used In DeFi (Decentralized Finance)?",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "NFTs and DeFi are closely related and have a lot to offer. Using NFTs in Decentralized finance opens doors to endless possibilities. Read on to find out how.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/nft-in-defi.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/how-are-nfts-used-in-defi"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/how-are-nfts-used-in-defi"
    );
    this.doc.head.appendChild(link);
  }
}
