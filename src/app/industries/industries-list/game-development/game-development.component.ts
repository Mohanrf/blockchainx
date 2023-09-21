import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../../shared/canonical.service";

@Component({
  selector: "app-game-development",
  templateUrl: "./game-development.component.html",
  styleUrls: ["./game-development.component.css"],
})
export class GameDevelopmentComponent implements OnInit {
  title = "Blockchain in Games - BlockchainX";
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
        "As a Blockchain game development company, BlockchainX has been working on multiple blockchain games like cryptokitties clone, crypto lottery, crypto roulette, crypto tic-tac-toe integrated any cryptocurrency. BlockchainX has skilled blockchain game developers to work on Ethereum erc20 and erc721 based game development and other coins based development. Secured automated payouts and earnings for game owners. Setup your crypto powered game once for lifetime earning.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Blockchain games, blockchain game development company",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "Blockchain in Games - BlockchainX",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/blockchain-game-development",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "As a Blockchain game development company, BlockchainX has been working on multiple blockchain games like cryptokitties clone, crypto lottery, crypto roulette, crypto tic-tac-toe integrated any cryptocurrency. BlockchainX has skilled blockchain game developers to work on Ethereum erc20 and erc721 based game development and other coins based development. Secured automated payouts and earnings for game owners. Setup your crypto powered game once for lifetime earning.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-gaming.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/blockchain-game-development",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "Blockchain in Games - BlockchainX",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "As a Blockchain game development company, BlockchainX has been working on multiple blockchain games like cryptokitties clone, crypto lottery, crypto roulette, crypto tic-tac-toe integrated any cryptocurrency. BlockchainX has skilled blockchain game developers to work on Ethereum erc20 and erc721 based game development and other coins based development. Secured automated payouts and earnings for game owners. Setup your crypto powered game once for lifetime earning.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-gaming.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/blockchain-game-development"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/blockchain-game-development"
    );
    this.doc.head.appendChild(link);
  }
}
