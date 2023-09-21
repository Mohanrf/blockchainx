import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-cryptopunks",
  templateUrl: "./nft-cryptopunks.component.html",
  styleUrls: ["./nft-cryptopunks.component.css"],
})
export class NftCryptopunksComponent implements OnInit {
  title = "How to create NFTs like Cryptopunks to earn effective income";
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
        "How successful are NFTs collections? Many of us today have many dilemmas as to which are the best NFT collections. Cryptopunks would be a good answer to that, and their value is not diminishing even today. Then, through this blog, let's see step by step how to create NFTs Like Cryptopunks.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "NFTs Like CryptoPunks, Create NFTs Like CryptoPunks",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "How to create NFTs like Cryptopunks to earn effective income",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/create-nfts-like-cryptopunks",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "How successful are NFTs collections? Many of us today have many dilemmas as to which are the best NFT collections. Cryptopunks would be a good answer to that, and their value is not diminishing even today. Then, through this blog, let's see step by step how to create NFTs Like Cryptopunks.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/nft-like-cryptopunks-1.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/create-nfts-like-cryptopunks",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "How to create NFTs like Cryptopunks to earn effective income",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "How successful are NFTs collections? Many of us today have many dilemmas as to which are the best NFT collections. Cryptopunks would be a good answer to that, and their value is not diminishing even today. Then, through this blog, let's see step by step how to create NFTs Like Cryptopunks.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/nft-like-cryptopunks-1.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/create-nfts-like-cryptopunks"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/create-nfts-like-cryptopunks"
    );
    this.doc.head.appendChild(link);
  }
}
