import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../../shared/canonical.service";

@Component({
  selector: "app-agriculture",
  templateUrl: "./agriculture.component.html",
  styleUrls: ["./agriculture.component.css"],
})
export class AgricultureComponent implements OnInit {

  title =
    "Blockchain in Agriculture - BlockchainX";
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
        "Blockchain in agriculture has various advantages in terms of food safety, traceability, supply chain, and logistics. BlockchainX's blockchain agriculture supply chain solution bridges the gap.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Blockchain in agriculture , blockchain agriculture supply chain",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Blockchain in Agriculture - BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/blockchain-applications-agriculture",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Blockchain in agriculture has various advantages in terms of food safety, traceability, supply chain, and logistics. BlockchainX's blockchain agriculture supply chain solution bridges the gap.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-agriculture.png",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/blockchain-applications-agriculture",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Blockchain in Agriculture - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Blockchain in agriculture has various advantages in terms of food safety, traceability, supply chain, and logistics. BlockchainX's blockchain agriculture supply chain solution bridges the gap between the end customer and the process from agriculture to delivery. A decentralized agriculture system with blockchain makes the overall system enhanced to delivery quality products",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-agriculture.png",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/blockchain-applications-agriculture"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/blockchain-applications-agriculture"
    );
    this.doc.head.appendChild(link);
  }
  
}
