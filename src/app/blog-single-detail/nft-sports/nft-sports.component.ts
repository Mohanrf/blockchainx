import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-sports",
  templateUrl: "./nft-sports.component.html",
  styleUrls: ["./nft-sports.component.css"],
})
export class NftSportsComponent implements OnInit {
  title = "Complete Guide to NFT Sports Platforms development in 2022";
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
        "If you are still in doubt about this new digital revolution, you need to wake up quickly and adapt. Sports NFTs have attained popularity in recent years. Now, they are entering every corner of the sports world and slowly addressing their influence in the sports business. In this article, let's find out what value NFTs bring to the sports world and how they contribute to the growth of the sports business.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "nft marketplace, nft marketplaces, nft marketplace website, marketplace nft, nba nft marketplace, nft marketplace development, nft development, sports nft marketplace, best nft market, most famous nft, market place nft, nft crypto marketplace, crypto nft marketplace, nft revolution, new nft marketplace, learn about nft, best platform for nft, nft marketplace nba, marketplace for nft, nft token marketplace, marketplace de nfts, sports nft crypto, all nft marketplaces.",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Complete Guide to NFT Sports Platforms development in 2022",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/nft-sports-platforms-development",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "If you are still in doubt about this new digital revolution, you need to wake up quickly and adapt. Sports NFTs have attained popularity in recent years. Now, they are entering every corner of the sports world and slowly addressing their influence in the sports business. In this article, let's find out what value NFTs bring to the sports world and how they contribute to the growth of the sports business.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/nft-in-sports-platform.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/nft-sports-platforms-development",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Complete Guide to NFT Sports Platforms development in 2022",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "If you are still in doubt about this new digital revolution, you need to wake up quickly and adapt. Sports NFTs have attained popularity in recent years. Now, they are entering every corner of the sports world and slowly addressing their influence in the sports business. In this article, let's find out what value NFTs bring to the sports world and how they contribute to the growth of the sports business.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/nft-in-sports-platform.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/nft-sports-platforms-development"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/nft-sports-platforms-development"
    );
    this.doc.head.appendChild(link);
  }
}
