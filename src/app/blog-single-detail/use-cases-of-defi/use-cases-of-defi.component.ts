import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-use-cases-of-defi",
  templateUrl: "./use-cases-of-defi.component.html",
  styleUrls: ["./use-cases-of-defi.component.css"],
})
export class UseCasesOfDefiComponent implements OnInit {
  title = "Major Use Cases of Decentralized Finance (DeFi) - BlockchainX";
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
        "There are a lot more use cases for DeFi - Decentralized Finance, Here are some of the use cases that DeFi solves are Lending and Borrowing Platform, Payments, Stablecoins, Tokenization, Decentralized Exchanges and all major financial sectors.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "decentralized finance development, defi development, defi use cases, defi development company, defi lending and borrowing software, defi tokens development",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Major Use Cases of Decentralized Finance (DeFi) - BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/decentralized-finance-defi-use-cases",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "There are a lot more use cases for DeFi - Decentralized Finance, Here are some of the use cases that DeFi solves are Lending and Borrowing Platform, Payments, Stablecoins, Tokenization, Decentralized Exchanges and all major financial sectors.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/use-cases-of-DeFi.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/decentralized-finance-defi-use-cases",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Major Use Cases of Decentralized Finance (DeFi) - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "There are a lot more use cases for DeFi - Decentralized Finance, Here are some of the use cases that DeFi solves are Lending and Borrowing Platform, Payments, Stablecoins, Tokenization, Decentralized Exchanges and all major financial sectors.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/use-cases-of-DeFi.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/decentralized-finance-defi-use-cases"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/decentralized-finance-defi-use-cases"
    );
    this.doc.head.appendChild(link);
  }
}
