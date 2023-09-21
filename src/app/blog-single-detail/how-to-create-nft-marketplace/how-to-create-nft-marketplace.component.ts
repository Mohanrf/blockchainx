import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-how-to-create-nft-marketplace",
  templateUrl: "./how-to-create-nft-marketplace.component.html",
  styleUrls: ["./how-to-create-nft-marketplace.component.css"],
})
export class HowToCreateNftMarketplaceComponent implements OnInit {
  title =
    "NFT Marketplace Development - Customized Decentralised Platform Solution";
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
        "Invest in our capabilities, get to launch a fully functional, decentralized and highly efficient solution. By choosing us as your NFT marketplace development partner we can ensure you render a qualified and quantified platform with customized abilities and functionals.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "How to create an Nft marketplace,NFT Marketplace Development company,NFT Marketplace Development",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "NFT Marketplace Development - Customized Decentralised Platform Solution",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/how-to-create-an-nft-marketplace",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Invest in our capabilities, get to launch a fully functional, decentralized and highly efficient solution. By choosing us as your NFT marketplace development partner we can ensure you render a qualified and quantified platform with customized abilities and functionals.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://www.blockchainx.tech/assets-new/images/blog/how-to-create-an-nft-marketplace/how-to-create-an-nft-marketplace.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/how-to-create-an-nft-marketplace",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "NFT Marketplace Development - Customized Decentralised Platform Solution",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Invest in our capabilities, get to launch a fully functional, decentralized and highly efficient solution. By choosing us as your NFT marketplace development partner we can ensure you render a qualified and quantified platform with customized abilities and functionals.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://www.blockchainx.tech/assets-new/images/blog/how-to-create-an-nft-marketplace/how-to-create-an-nft-marketplace.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/how-to-create-an-nft-marketplace"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/how-to-create-an-nft-marketplace"
    );
    this.doc.head.appendChild(link);
  }
}
