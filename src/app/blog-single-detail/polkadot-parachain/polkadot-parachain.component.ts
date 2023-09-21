import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-polkadot-parachain",
  templateUrl: "./polkadot-parachain.component.html",
  styleUrls: ["./polkadot-parachain.component.css"],
})
export class PolkadotParachainComponent implements OnInit {
  title =
    "Will Polkadot Parachain be the next revolution in the Blockchain world? What & Why is Parachain?";
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
        "If we look at the recent Polakadot blockchain study, most blockchain enthusiasts are showing interest in developing their project on Polkadot Parachain. If you are thinking the same? then do a deep study on them before starting your parachain-based project. Let this blog be a good start for that.",
    });
    this.meta.updateTag({
      name: "keywords",
      content:
        "benefits of Polkadot parachains, Parachain on a Polkadot Network, Polkadot network with Parachains, Know everything about polkadot parachain, Polkadot Parachain",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content:
        "Will Polkadot Parachain be the next revolution in the Blockchain world? What & Why is Parachain?",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content:
        "https://www.blockchainx.tech/everything-you-need-to-know-polkadot-parachain",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "If we look at the recent Polakadot blockchain study, most blockchain enthusiasts are showing interest in developing their project on Polkadot Parachain. If you are thinking the same? then do a deep study on them before starting your parachain-based project. Let this blog be a good start for that.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/polkadot-parachain.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content:
        "https://www.blockchainx.tech/everything-you-need-to-know-polkadot-parachain",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content:
        "Will Polkadot Parachain be the next revolution in the Blockchain world? What & Why is Parachain?",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "If we look at the recent Polakadot blockchain study, most blockchain enthusiasts are showing interest in developing their project on Polkadot Parachain. If you are thinking the same? then do a deep study on them before starting your parachain-based project. Let this blog be a good start for that.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://blockchainx.tech/assets-new/images/blog-single/polkadot-parachain.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/everything-you-need-to-know-polkadot-parachain"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/everything-you-need-to-know-polkadot-parachain"
    );
    this.doc.head.appendChild(link);
  }
}
