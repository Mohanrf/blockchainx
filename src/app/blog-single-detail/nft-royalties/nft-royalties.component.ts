import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-royalties",
  templateUrl: "./nft-royalties.component.html",
  styleUrls: ["./nft-royalties.component.css"],
})
export class NftRoyaltiesComponent implements OnInit {
  title = "nft royalties and how they work";
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
        "NFT Royalties are a game changer for aspiring artists and creators. Doesn't that sound great? Continue reading to find out more about Royalties on NFT.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "what are nft royalties,nft royalties example,royalties on nft",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Everything about the NFT Royalties and how they work?",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/nft-royalties-and-how-they-work",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "NFT Royalties are a game changer for aspiring artists and creators. Doesn't that sound great? Continue reading to find out more about Royalties on NFT.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/nft-royal.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/nft-royalties-and-how-they-work",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Everything about the NFT Royalties and how they work?",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "NFT Royalties are a game changer for aspiring artists and creators. Doesn't that sound great? Continue reading to find out more about Royalties on NFT.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/nft-royal.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/nft-royalties-and-how-they-work"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/nft-royalties-and-how-they-work"
    );
    this.doc.head.appendChild(link);
  }
}
