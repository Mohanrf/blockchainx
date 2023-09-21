import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../../shared/canonical.service";

@Component({
  selector: "app-supply-chain",
  templateUrl: "./supply-chain.component.html",
  styleUrls: ["./supply-chain.component.css"],
})
export class SupplyChainComponent implements OnInit {
  title = "Blockchain in Supply Chain - BlockchainX";
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
        "Blockchain supply chain plays a major role in enterprise-level manufacturing industries as tracking products has been a major problem. BlockchainX's tailored software for Blockchain in the supply chain has made the supply chain process more transparent and efficient to track down the updates at any point. This has also helped in marketing where the end customer can see the process from manufacturing to delivery.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "Blockchain supply chain - 2000/mon, supply chain blockchain - 800/mon, blockchain in supply chain - 700/mon",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Blockchain in Supply Chain - BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/supply-chain-management-blockchain",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Blockchain supply chain plays a major role in enterprise-level manufacturing industries as tracking products has been a major problem. BlockchainX's tailored software for Blockchain in the supply chain has made the supply chain process more transparent and efficient to track down the updates at any point. This has also helped in marketing where the end customer can see the process from manufacturing to delivery.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/Blockchain-in-supplychain.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/supply-chain-management-blockchain",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Blockchain in Supply Chain - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Blockchain supply chain plays a major role in enterprise-level manufacturing industries as tracking products has been a major problem. BlockchainX's tailored software for Blockchain in the supply chain has made the supply chain process more transparent and efficient to track down the updates at any point. This has also helped in marketing where the end customer can see the process from manufacturing to delivery.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/Blockchain-in-supplychain.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/supply-chain-management-blockchain"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/supply-chain-management-blockchain"
    );
    this.doc.head.appendChild(link);
  }
}
