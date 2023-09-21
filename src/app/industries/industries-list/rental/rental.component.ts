import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../../shared/canonical.service";

@Component({
  selector: "app-rental",
  templateUrl: "./rental.component.html",
  styleUrls: ["./rental.component.css"],
})
export class RentalComponent implements OnInit {
  title =
    "Blockchain in Properties - Vacation Rental in Blockchain | BlockchainX";
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
        "Blockchain property rental has become a great use case as all rental agreement proofs have been stored and retrieved with smart contracts on the blockchain. The rental business has become more transparent with Blockchain. BlockchainX identifies blockchain's potential in the rental business and made the property rental agreements stored on to blockchain with timestamp technology",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Blockchain property , Blockchain properties",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Blockchain in Properties - Vacation Rental in Blockchain | BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/blockchain-in-rental",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Blockchain property rental has become a great use case as all rental agreement proofs have been stored and retrieved with smart contracts on the blockchain. The rental business has become more transparent with Blockchain. BlockchainX identifies blockchain's potential in the rental business and made the property rental agreements stored on to blockchain with timestamp technology",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-rental.png",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/blockchain-in-rental",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Blockchain in Properties - Vacation Rental in Blockchain | BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Blockchain property rental has become a great use case as all rental agreement proofs have been stored and retrieved with smart contracts on the blockchain. The rental business has become more transparent with Blockchain. BlockchainX identifies blockchain's potential in the rental business and made the property rental agreements stored on to blockchain with timestamp technology",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-rental.png",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/blockchain-in-rental"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/blockchain-in-rental"
    );
    this.doc.head.appendChild(link);
  }
}
