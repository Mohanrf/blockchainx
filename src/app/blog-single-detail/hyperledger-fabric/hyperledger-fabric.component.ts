import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-hyperledger-fabric",
  templateUrl: "./hyperledger-fabric.component.html",
  styleUrls: ["./hyperledger-fabric.component.css"],
})
export class HyperledgerFabricComponent implements OnInit {
  title =
    "Everything you need to Know: New Hyperledger Fabric v2.0 | BlockchainX | 2020";
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
        "The new version of hyperledger fabric is out and hyperledger fabric v2.0 has tones of new amazing features and updates. Read more find out what Hyperledger Fabric v2.0 can do.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "Blockchain games - 400/mon, blockchain game development company - 100/mon",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Everything you need to Know: New Hyperledger Fabric v2.0 | BlockchainX | 2020",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/hyperledger-fabric-v2",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "The new version of hyperledger fabric is out and hyperledger fabric v2.0 has tones of new amazing features and updates. Read more find out what Hyperledger Fabric v2.0 can do.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/hyperledger-fabric-v2.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/hyperledger-fabric-v2",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Everything you need to Know: New Hyperledger Fabric v2.0 | BlockchainX | 2020",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "The new version of hyperledger fabric is out and hyperledger fabric v2.0 has tones of new amazing features and updates. Read more find out what Hyperledger Fabric v2.0 can do.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog/hyperledger-fabric-v2.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/hyperledger-fabric-v2"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/hyperledger-fabric-v2"
    );
    this.doc.head.appendChild(link);
  }
}
