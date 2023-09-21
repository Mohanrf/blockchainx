import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-myths-about-blockchain",
  templateUrl: "./myths-about-blockchain.component.html",
  styleUrls: ["./myths-about-blockchain.component.css"],
})
export class MythsAboutBlockchainComponent implements OnInit {
  title =
    "9 Biggest Myths about Blockchain Technology that everyone Believes - BlockchainX";
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
        "Like any emerging technology, Blockchain Technology stands to revolutionize many industries. On the other hand, there is a lot of myths and misconceptions surrounding Blockchain. Here are the 9 Biggest Myths about Blockchain Technology that everyone believes",
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
        "9 Biggest Myths about Blockchain Technology that everyone Believes - BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/9-myths-about-blockchain-technology",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Like any emerging technology, Blockchain Technology stands to revolutionize many industries. On the other hand, there is a lot of myths and misconceptions surrounding Blockchain. Here are the 9 Biggest Myths about Blockchain Technology that everyone believes",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/9-myths-blockchain.png",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/9-myths-about-blockchain-technology",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "9 Biggest Myths about Blockchain Technology that everyone Believes - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Like any emerging technology, Blockchain Technology stands to revolutionize many industries. On the other hand, there is a lot of myths and misconceptions surrounding Blockchain. Here are the 9 Biggest Myths about Blockchain Technology that everyone believes",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/9-myths-blockchain.png",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/9-myths-about-blockchain-technology"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/9-myths-about-blockchain-technology"
    );
    this.doc.head.appendChild(link);
  }
}
