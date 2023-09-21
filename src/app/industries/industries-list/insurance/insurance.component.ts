import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../../shared/canonical.service";

@Component({
  selector: "app-insurance",
  templateUrl: "./insurance.component.html",
  styleUrls: ["./insurance.component.css"],
})
export class InsuranceComponent implements OnInit {
  title =
    "Blockchain in Insurance - Guide to Blockchain in Insurance | BlockchainX";
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
        "BlockchainX has brought down the gap between Blockchain and Insurance. Insurance is a field that is currently being manipulated with fake data. BlockchainX has brought all the insurance documents and processes to Blockchain which makes it become the Market leader In Blockchain insurance development company.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "Blockchain healthcare , healthcare blockchain, Blockchain for healthcare , blockchain in healthcare, blockchain and insurance",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Blockchain in Insurance - Guide to Blockchain in Insurance | BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/blockchain-in-insurance",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "BlockchainX has brought down the gap between Blockchain and Insurance. Insurance is a field that is currently being manipulated with fake data. BlockchainX has brought all the insurance documents and processes to Blockchain which makes it become the Market leader In Blockchain insurance development company.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-insurance.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/blockchain-in-insurance",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Blockchain in Insurance - Guide to Blockchain in Insurance | BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "BlockchainX has brought down the gap between Blockchain and Insurance. Insurance is a field that is currently being manipulated with fake data. BlockchainX has brought all the insurance documents and processes to Blockchain which makes it become the Market leader In Blockchain insurance development company.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-insurance.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/blockchain-in-insurance"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/blockchain-in-insurance"
    );
    this.doc.head.appendChild(link);
  }
}
