import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-primary-technology-in-metaverse",
  templateUrl: "./primary-technology-in-metaverse.component.html",
  styleUrls: ["./primary-technology-in-metaverse.component.css"],
})
export class PrimaryTechnologyInMetaverseComponent implements OnInit {
  title = "Know about the primary Technologies that power the Metaverse";
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
        "Are you curious about the Technologies that are the driving forces behind the Metaverse? These technologies draw attention to a new age of the internet. To learn everything you need to know, Read more.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "Key Technologies that Power the Metaverse, Key Technologies for the Development of the Metaverse, How Major Technologies Powering The Metaverse, Everything About Metaverse Technology",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Know about the primary Technologies that power the Metaverse",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/primary-technologies-in-metaverse",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Are you curious about the Technologies that are the driving forces behind the Metaverse? These technologies draw attention to a new age of the internet. To learn everything you need to know, Read more.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog-single/primary-technologies-in-metaverse.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/primary-technologies-in-metaverse",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Know about the primary Technologies that power the Metaverse",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Are you curious about the Technologies that are the driving forces behind the Metaverse? These technologies draw attention to a new age of the internet. To learn everything you need to know, Read more.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog-single/primary-technologies-in-metaverse.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/primary-technologies-in-metaverse"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/primary-technologies-in-metaverse"
    );
    this.doc.head.appendChild(link);
  }
}
