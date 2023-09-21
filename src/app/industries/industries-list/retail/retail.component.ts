import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../../shared/canonical.service";

@Component({
  selector: "app-retail",
  templateUrl: "./retail.component.html",
  styleUrls: ["./retail.component.css"],
})
export class RetailComponent implements OnInit {
  title = "Blockchain in Retail - BlockchainX";
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
        "Blockchain in retail has brought up how retailers gain customer's confidence by storing all the customer's details, record real time information, delivery information on the secured blockchain. This has boosted up the quality and trusted the reliability of the retailer with its customers. After all gaining customer's confidence is the core backbone of the retail industry. BlockchainX's solution for the retail industry with blockchain has a proven record of boosting customer confidence",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Blockchain retail",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Blockchain in Retail - BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/blockchain-in-retail",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Blockchain in retail has brought up how retailers gain customer's confidence by storing all the customer's details, record real time information, delivery information on the secured blockchain. This has boosted up the quality and trusted the reliability of the retailer with its customers. After all gaining customer's confidence is the core backbone of the retail industry. BlockchainX's solution for the retail industry with blockchain has a proven record of boosting customer confidence",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images//Industries/Blockchain-in-retail.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/blockchain-in-retail",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Blockchain in Retail - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Blockchain in retail has brought up how retailers gain customer's confidence by storing all the customer's details, record real time information, delivery information on the secured blockchain. This has boosted up the quality and trusted the reliability of the retailer with its customers. After all gaining customer's confidence is the core backbone of the retail industry. BlockchainX's solution for the retail industry with blockchain has a proven record of boosting customer confidence",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images//Industries/Blockchain-in-retail.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/blockchain-in-retail"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/blockchain-in-retail"
    );
    this.doc.head.appendChild(link);
  }
}
