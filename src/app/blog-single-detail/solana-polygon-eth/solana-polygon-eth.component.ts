import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-solana-polygon-eth",
  templateUrl: "./solana-polygon-eth.component.html",
  styleUrls: ["./solana-polygon-eth.component.css"],
})
export class SolanaPolygonEthComponent implements OnInit {
  title = "Explore the detailed comparison of Solana Vs Polygon Vs Ethereum";
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
        "Trying to choose a blockchain platform for your next project? In this article, you will find a detailed comparison of Solana vs Polygon vs Ethereum which will help you make the right choice.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "Solana vs Polygon vs Ethereum - A Detailed Comparison, difference between Solana vs Polygon vs Ethereum, Solana vs Polygon vs Ethereum - whats the difference, Comparing nft platforms - Solana vs Polygon vs Ethereum, Which is better Polygon or Ethereum or solana",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Explore the detailed comparison of Solana Vs Polygon Vs Ethereum",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/comparison-of-solana-polygon-ethereum",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Trying to choose a blockchain platform for your next project? In this article, you will find a detailed comparison of Solana vs Polygon vs Ethereum which will help you make the right choice.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/Comparision-of-sol-poly-eth.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/comparison-of-solana-polygon-ethereum",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Explore the detailed comparison of Solana Vs Polygon Vs Ethereum",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Trying to choose a blockchain platform for your next project? In this article, you will find a detailed comparison of Solana vs Polygon vs Ethereum which will help you make the right choice.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog/Comparision-of-sol-poly-eth.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/comparison-of-solana-polygon-ethereum"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/comparison-of-solana-polygon-ethereum"
    );
    this.doc.head.appendChild(link);
  }
}
