import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-solana-proof",
  templateUrl: "./solana-proof.component.html",
  styleUrls: ["./solana-proof.component.css"],
})
export class SolanaProofComponent implements OnInit {
  title =
    "How did Solana get so fast? How does the proof of history mechanism work?";
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
        "If you ask which is the fastest transacting blockchain in the blockchain world today, there is only one answer Solana. You can transact within milliseconds from any corner of the world. How is this possible? Read through to learn about Solana and proof of history consensus.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Solana Blockchain, Solana's proof of history",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "How did Solana get so fast? How does the proof of history mechanism work?",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/solana-proof-of-history",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "If you ask which is the fastest transacting blockchain in the blockchain world today, there is only one answer Solana. You can transact within milliseconds from any corner of the world. How is this possible? Read through to learn about Solana and proof of history consensus.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/solana/Banner.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/solana-proof-of-history",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "How did Solana get so fast? How does the proof of history mechanism work?",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "If you ask which is the fastest transacting blockchain in the blockchain world today, there is only one answer Solana. You can transact within milliseconds from any corner of the world. How is this possible? Read through to learn about Solana and proof of history consensus.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/solana/Banner.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/solana-proof-of-history"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/solana-proof-of-history"
    );
    this.doc.head.appendChild(link);
  }
}
