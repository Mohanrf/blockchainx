import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-how-to-invest-in-bitcoin",
  templateUrl: "./how-to-invest-in-bitcoin.component.html",
  styleUrls: ["./how-to-invest-in-bitcoin.component.css"],
})
export class HowToInvestInBitcoinComponent implements OnInit {
  title = "Reason to Invest in Bitcoin on 2021 - BlockchainX";
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
        "Learn the Reason to Invest in Bitcoin on 2021 and know more about the investment advice, why bitcoin get more traction, why bitcoin is a good investment and benefits in bitcoin.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "hyperledger, hyperledger fabric, blockchain framework, blockchain,Blockchain Platform, IBM, Linux Foundation",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Reason to Invest in Bitcoin on 2021 - BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/how-to-invest-in-bitcoin",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Learn the Reason to Invest in Bitcoin on 2021 and know more about the investment advice, why bitcoin get more traction, why bitcoin is a good investment and benefits in bitcoin.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/bitcoin-2021.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/how-to-invest-in-bitcoin",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Reason to Invest in Bitcoin on 2021 - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Learn the Reason to Invest in Bitcoin on 2021 and know more about the investment advice, why bitcoin get more traction, why bitcoin is a good investment and benefits in bitcoin.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/bitcoin-2021.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/how-to-invest-in-bitcoin"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/how-to-invest-in-bitcoin"
    );
    this.doc.head.appendChild(link);
  }
}
