import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-stellar-consensus-protocol",
  templateUrl: "./stellar-consensus-protocol.component.html",
  styleUrls: ["./stellar-consensus-protocol.component.css"],
})
export class StellarConsensusProtocolComponent implements OnInit {
  title =
    "Stellar Consensus Protocol -  Get Benefited With Stellar Consensus Protocol Working With Security And Speed | BlockchainX";
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
        "Apart from different consensus present in the era of Blockchain, Stellar consensus protocol benefits the users with added security, speed, and many other benefits, whose reliance is never central. Explore more about SCP working in this blog!",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "stellars consensus protocol, stellars consensus protocol works, stellar consensus protocol explained",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Stellar Consensus Protocol -  Get Benefited With Stellar Consensus Protocol Working With Security And Speed | BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/stellar-consensus-protocol",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "Apart from different consensus present in the era of Blockchain, Stellar consensus protocol benefits the users with added security, speed, and many other benefits, whose reliance is never central. Explore more about SCP working in this blog!",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog-single/Stellar/Stellar-Consensus-Protocol.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/stellar-consensus-protocol",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Stellar Consensus Protocol -  Get Benefited With Stellar Consensus Protocol Working With Security And Speed | BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "Apart from different consensus present in the era of Blockchain, Stellar consensus protocol benefits the users with added security, speed, and many other benefits, whose reliance is never central. Explore more about SCP working in this blog!",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content:
        "https://blockchainx.tech/assets-new/images/blog-single/Stellar/Stellar-Consensus-Protocol.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/stellar-consensus-protocol"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/stellar-consensus-protocol"
    );
    this.doc.head.appendChild(link);
  }
}
