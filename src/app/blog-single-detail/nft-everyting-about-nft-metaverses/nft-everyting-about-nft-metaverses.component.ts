import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-everyting-about-nft-metaverses",
  templateUrl: "./nft-everyting-about-nft-metaverses.component.html",
  styleUrls: ["./nft-everyting-about-nft-metaverses.component.css"],
})
export class NftEverytingAboutNftMetaversesComponent implements OnInit {
  title = "Everything about the Metaverse NFT Marketplace";
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
        "Making a Metaverse NFT marketplace with unique and interesting features will entice a large number of users. With the well-known NFT marketplace, you can take your business to the next level.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "top 5 mistakes to avoid built marketplace, building nft marketplace, create nft marketplace",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Everything about the Metaverse NFT Marketplace",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/everything-about-nft-metaverse",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Making a Metaverse NFT marketplace with unique and interesting features will entice a large number of users. With the well-known NFT marketplace, you can take your business to the next level.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/everything-about-nft-metaverse.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/everything-about-nft-metaverse",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Everything about the Metaverse NFT Marketplace",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Making a Metaverse NFT marketplace with unique and interesting features will entice a large number of users. With the well-known NFT marketplace, you can take your business to the next level.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/everything-about-nft-metaverse.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/everything-about-nft-metaverse"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/everything-about-nft-metaverse"
    );
    this.doc.head.appendChild(link);
  }
}
