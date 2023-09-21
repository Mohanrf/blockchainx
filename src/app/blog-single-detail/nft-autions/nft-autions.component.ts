import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-autions",
  templateUrl: "./nft-autions.component.html",
  styleUrls: ["./nft-autions.component.css"],
})
export class NftAutionsComponent implements OnInit {
  title = "NFT Auctions - How Are NFTs Sold? Is NFT Auction Sale Profitable?";
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
        "The most interesting part of NFTs is their uniqueness and ability to hold up their value through the process and in phase. Talking more about actually creating NTfs, here we have discussed how to sell and own NFTs apart from creating one, with an NFT Auction sale.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "what's an nft auction,how to auction nfts, how nft auction works, how auctions work on opensea, how to auction nft art",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "NFT Auctions - How Are NFTs Sold? Is NFT Auction Sale Profitable?",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/nft-auctions",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "The most interesting part of NFTs is their uniqueness and ability to hold up their value through the process and in phase. Talking more about actually creating NTfs, here we have discussed how to sell and own NFTs apart from creating one, with an NFT Auction sale.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://www.blockchainx.tech/assets-new/images/blog/how-does-auction-work-for-nfts.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/nft-auctions",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "NFT Auctions - How Are NFTs Sold? Is NFT Auction Sale Profitable?",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "The most interesting part of NFTs is their uniqueness and ability to hold up their value through the process and in phase. Talking more about actually creating NTfs, here we have discussed how to sell and own NFTs apart from creating one, with an NFT Auction sale.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://www.blockchainx.tech/assets-new/images/blog/how-does-auction-work-for-nfts.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/nft-auctions"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute("href", "https://www.blockchainx.tech/amp/nft-auctions");
    this.doc.head.appendChild(link);
  }
}
