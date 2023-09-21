import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-what-is-iso",
  templateUrl: "./what-is-iso.component.html",
  styleUrls: ["./what-is-iso.component.css"],
})
export class WhatIsIsoComponent implements OnInit {
  title =
    "What Is ISO 20022 : How Will This New Data Standard Impact Your Crypto Industry?";
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
        "The SWIFT message exchange network (known as ISO 15022) is transitioning to the new, highly structured ISO 20022 financial messaging standard, and how this will impact the crypto industry remains to be seen.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "What is ISO 20022?, Benefits of ISO 20022, impact of ISO 20022",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "What Is ISO 20022 : How Will This New Data Standard Impact Your Crypto Industry?",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/what-is-iso-20022",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "The SWIFT message exchange network (known as ISO 15022) is transitioning to the new, highly structured ISO 20022 financial messaging standard, and how this will impact the crypto industry remains to be seen.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog-single/20022/What-is-ISO-20022-banner.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/what-is-iso-20022",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "What Is ISO 20022 : How Will This New Data Standard Impact Your Crypto Industry?",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "The SWIFT message exchange network (known as ISO 15022) is transitioning to the new, highly structured ISO 20022 financial messaging standard, and how this will impact the crypto industry remains to be seen.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog-single/20022/What-is-ISO-20022-banner.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/what-is-iso-20022"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/what-is-iso-20022"
    );
    this.doc.head.appendChild(link);
  }
}
