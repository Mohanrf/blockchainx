import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-staking",
  templateUrl: "./nft-staking.component.html",
  styleUrls: ["./nft-staking.component.css"],
})
export class NftStakingComponent implements OnInit {
  title = "What is NFT Staking and How to Earn Income From NFTs";
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
        "It is not enough to buy NFTs, you have to earn income from them. NFT staking is like DeFi yield farming. You can make money from staking by owning such assets. Not only can you tokenize your assets but also earn money using them. In this article, we cover everything you need to know about NFT staking and how to make use of NFTs.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "what is nft staking, nft staking, how does nft staking work,NFT staking platforms",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "What is NFT Staking and How to Earn Income From NFTs",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/what-is-nft-staking",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "It is not enough to buy NFTs, you have to earn income from them. NFT staking is like DeFi yield farming. You can make money from staking by owning such assets. Not only can you tokenize your assets but also earn money using them. In this article, we cover everything you need to know about NFT staking and how to make use of NFTs.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/staking/nft-staking.png",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/what-is-nft-staking",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "What is NFT Staking and How to Earn Income From NFTs",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "It is not enough to buy NFTs, you have to earn income from them. NFT staking is like DeFi yield farming. You can make money from staking by owning such assets. Not only can you tokenize your assets but also earn money using them. In this article, we cover everything you need to know about NFT staking and how to make use of NFTs.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/staking/nft-staking.png",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/what-is-nft-staking"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/what-is-nft-staking"
    );
    this.doc.head.appendChild(link);
  }
}
