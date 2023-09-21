import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-role-in-metaverse",
  templateUrl: "./nft-role-in-metaverse.component.html",
  styleUrls: ["./nft-role-in-metaverse.component.css"],
})
export class NftRoleInMetaverseComponent implements OnInit {
  title = "NFTs And Their Role In The Metaverse";
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
        "NFTs and Metaverse are closely related and can help us create whole new digital economies. Development of metaverse and nft are highly in demand. This is why.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "NFTs Role In Metaverse, What are NFTs metaverse, Future of the NFT in Metaverse, Types of Metaverse NFTs, Development of metaverse",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "NFTs And Their Role In The Metaverse",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/nfts-and-their-role-in-the-metaverse",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "NFTs and Metaverse are closely related and can help us create whole new digital economies. Development of metaverse and nft are highly in demand. This is why.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/nft-role-metaverse.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/nfts-and-their-role-in-the-metaverse",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "NFTs And Their Role In The Metaverse",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "NFTs and Metaverse are closely related and can help us create whole new digital economies. Development of metaverse and nft are highly in demand. This is why.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/nft-role-metaverse.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/nfts-and-their-role-in-the-metaverse"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/nfts-and-their-role-in-the-metaverse"
    );
    this.doc.head.appendChild(link);
  }
}
