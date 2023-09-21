import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-types-of-blockchain",
  templateUrl: "./types-of-blockchain.component.html",
  styleUrls: ["./types-of-blockchain.component.css"],
})
export class TypesOfBlockchainComponent implements OnInit {
  title = "What are the Different Types of Blockchain? - BlockchainX";
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
        "In this article we are going to learn about What are types of Blockchain Technologies and what are the sectors that Blockchain types are used.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "Types of blockchain, private blockchain, public blockchain, hybrid blockchain",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "What are the Different Types of Blockchain? - BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/types-of-blockchain",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "In this article we are going to learn about What are types of Blockchain Technologies and what are the sectors that Blockchain types are used.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog-new/Are-there-any-types-in-blockchain.png",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/types-of-blockchain",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "What are the Different Types of Blockchain? - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "In this article we are going to learn about What are types of Blockchain Technologies and what are the sectors that Blockchain types are used.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog-new/Are-there-any-types-in-blockchain.png",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/types-of-blockchain"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/types-of-blockchain"
    );
    this.doc.head.appendChild(link);
  }
}
