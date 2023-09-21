import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-top-metaverse-projects",
  templateUrl: "./top-metaverse-projects.component.html",
  styleUrls: ["./top-metaverse-projects.component.css"],
})
export class TopMetaverseProjectsComponent implements OnInit {
  title = "Top 5 Metaverse Projects to keep on your radar in 2022";
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
        "Looking for the best metaverse crypto going into 2022? These are the top metaverse projects to keep an eye on this year. Read on to see our top 5 picks.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "best metaverse crypto 2022, top metaverse projects crypto, metaverse crypto list, top metaverse projects, metaverse token",
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
      content: "https://www.blockchainx.tech/top-5-metaverse-projects",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Learn the Reason to Invest in Bitcoin on 2021 and know more about the investment advice, why bitcoin get more traction, why bitcoin is a good investment and benefits in bitcoin.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog/metaverse-feb02.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/top-5-metaverse-projects",
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
      content: "https://blockchainx.tech/assets-new/images/blog/metaverse-feb02.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/top-5-metaverse-projects"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/top-5-metaverse-projects"
    );
    this.doc.head.appendChild(link);
  }
}
