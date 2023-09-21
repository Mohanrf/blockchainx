import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-top-blockchain-platforms",
  templateUrl: "./top-blockchain-platforms.component.html",
  styleUrls: ["./top-blockchain-platforms.component.css"],
})
export class TopBlockchainPlatformsComponent implements OnInit {
  title = "The Major Blockchain Platforms to look for in 2023";
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
        "Blockchain technology appears to be speedy nowadays. So we have made a list of the major blockchain platforms that you can explore in 2023 to assist organizations in bringing more transparency and efficiency into their business ecosystems using blockchain.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "top blockchain platforms, blockchain 2023, major blockchain platforms, next blockchain technology",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "The Major Blockchain Platforms to look for in 2023",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/top-blockchain-platforms-explore-in-2023",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Blockchain technology appears to be speedy nowadays. So we have made a list of the major blockchain platforms that you can explore in 2023 to assist organizations in bringing more transparency and efficiency into their business ecosystems using blockchain.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/Blockchain-platforms-1.png",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/top-blockchain-platforms-explore-in-2023",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "The Major Blockchain Platforms to look for in 2023",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Blockchain technology appears to be speedy nowadays. So we have made a list of the major blockchain platforms that you can explore in 2023 to assist organizations in bringing more transparency and efficiency into their business ecosystems using blockchain.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/Blockchain-platforms-1.png",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/top-blockchain-platforms-explore-in-2023"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/top-blockchain-platforms-explore-in-2023"
    );
    this.doc.head.appendChild(link);
  }
}
