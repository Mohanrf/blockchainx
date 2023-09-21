import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-gimmick",
  templateUrl: "./nft-gimmick.component.html",
  styleUrls: ["./nft-gimmick.component.css"],
})
export class NftGimmickComponent implements OnInit {
  title =
    "Are NFTs a gimmick or the Future of Gaming? — NFTs in the gaming world | BlockchainX";
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
        "NFTs have been intensifying to have a significant impact on gaming businesses.Since video games are virtual, they are an ideal sector for vital marketplaces to flourish and add value. But is there any benefit to having NFTs video games in the future? Let's view this blog in depth.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "The future of gaming and NFTs, Role of nfts in video games, Blockchain and NFTs are the future of NFT games, NFTs in Gaming, NFT games, NFT and decentralised blockchain, Future of NFTs in the gaming world, Future of NFTs, NFT technology",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Are NFTs a gimmick or the Future of Gaming? — NFTs in the gaming world | BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/nft-gimmick-or-feature-of-gaming",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "NFTs have been intensifying to have a significant impact on gaming businesses.Since video games are virtual, they are an ideal sector for vital marketplaces to flourish and add value. But is there any benefit to having NFTs video games in the future? Let's view this blog in depth.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/nft-gaming-feature.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/nft-gimmick-or-feature-of-gaming",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Are NFTs a gimmick or the Future of Gaming? — NFTs in the gaming world | BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "NFTs have been intensifying to have a significant impact on gaming businesses.Since video games are virtual, they are an ideal sector for vital marketplaces to flourish and add value. But is there any benefit to having NFTs video games in the future? Let's view this blog in depth.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/nft-gaming-feature.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/nft-gimmick-or-feature-of-gaming"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/nft-gimmick-or-feature-of-gaming"
    );
    this.doc.head.appendChild(link);
  }
}
