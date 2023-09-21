import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../../shared/canonical.service";

@Component({
  selector: "app-finance",
  templateUrl: "./finance.component.html",
  styleUrls: ["./finance.component.css"],
})
export class FinanceComponent implements OnInit {
  title =
    "Blockchain in Finance and Banking - Blockchain solutions in Finance and Banking | BlockchainX";
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
        "Blockchain in Finance and Blockchain in Banking has been the next generation of secure tamper-proof payment system which can process billions of transactions in a second. Blockchain Fintech has helped multiple companies to process payments with ease. Get your bank, payment transactions blockchain-powered with BlockchainX's 100% secured tamper-proof mechanism with all transaction history saved onto the blockchain.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "Blockchain finance - 300, Blockchain in finance - 200, Blockchain in banking , Blockchain banking",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Blockchain in Finance and Banking - Blockchain solutions in Finance and Banking | BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/blockchain-technology-in-banking-and-finance",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Blockchain in Finance and Blockchain in Banking has been the next generation of secure tamper-proof payment system which can process billions of transactions in a second. Blockchain Fintech has helped multiple companies to process payments with ease. Get your bank, payment transactions blockchain-powered with BlockchainX's 100% secured tamper-proof mechanism with all transaction history saved onto the blockchain.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-finance-and-marketing.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/blockchain-technology-in-banking-and-finance",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Blockchain in Finance and Banking - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Blockchain in Finance and Blockchain in Banking has been the next generation of secure tamper-proof payment system which can process billions of transactions in a second. Blockchain Fintech has helped multiple companies to process payments with ease. Get your bank, payment transactions blockchain-powered with BlockchainX's 100% secured tamper-proof mechanism with all transaction history saved onto the blockchain.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-finance-and-marketing.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/blockchain-technology-in-banking-and-finance"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/blockchain-technology-in-banking-and-finance"
    );
    this.doc.head.appendChild(link);
  }
}
