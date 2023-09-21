import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-music-marketplace",
  templateUrl: "./nft-music-marketplace.component.html",
  styleUrls: ["./nft-music-marketplace.component.css"],
})
export class NftMusicMarketplaceComponent implements OnInit {
  title = "nft music marketplace";
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
        "The crypto world has held its monopoly position very high in the market. NFTs have been providing many opportunities for artists, sportsmen, musicians, gamers, and fans of these. Are you a musician? Or a music lover? So now share your favorite songs as NFTs on the digital market and enjoy the fruitfulness of loveable lyrical NFTs.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "music nft marketplace,nft music marketplace,best nft marketplace for music,nft music marketplace development,nft marketplace music,nft marketplace for music",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Music NFT Marketplace: Let your favorite music resonate in the digital market.",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/nft-music-marketplace",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "The crypto world has held its monopoly position very high in the market. NFTs have been providing many opportunities for artists, sportsmen, musicians, gamers, and fans of these. Are you a musician? Or a music lover? So now share your favorite songs as NFTs on the digital market and enjoy the fruitfulness of loveable lyrical NFTs.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/nft-music.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/nft-music-marketplace",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Music NFT Marketplace: Let your favorite music resonate in the digital market.",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "The crypto world has held its monopoly position very high in the market. NFTs have been providing many opportunities for artists, sportsmen, musicians, gamers, and fans of these. Are you a musician? Or a music lover? So now share your favorite songs as NFTs on the digital market and enjoy the fruitfulness of loveable lyrical NFTs.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/nft-music.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/nft-music-marketplace"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/nft-music-marketplace"
    );
    this.doc.head.appendChild(link);
  }
}
