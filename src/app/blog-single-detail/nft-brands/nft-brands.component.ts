import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../shared/canonical.service";

@Component({
  selector: "app-nft-brands",
  templateUrl: "./nft-brands.component.html",
  styleUrls: ["./nft-brands.component.css"],
})
export class NftBrandsComponent implements OnInit {
  title = "10 Big Brands Jumping On The NFT";
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
        "In this fast-paced NFT era, everyone is competing with each other to secure their place in the NFT space. Big brands are joining the bandwagon and boosting it's credibility. Here are 10 brands jumping into NFTs.",
    });
    this.meta.updateTag({
      name: "keywords",
      content: "new nft projects, nft art, nft launch, nft crypto, nft market, buy nft, metaverse nft, nft buy, buy nft art, nft collection, art nft, big time nft, buying nfts, nft world, nft companies,nft site, nft space, best nft to buy, nft project, digital nft, coca cola nft, nft purchase, buy an nft, which nft to buy,upcoming nft",
    });
    this.meta.updateTag({ name: "author", content: "BlockchainX" });
    this.meta.updateTag({ name: "robots", content: "index, follow" });

    this.meta.updateTag({
      property: "og:title",
      content: "10 Big Brands Jumping On The NFT",
    });
    this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.blockchainx.tech/ten-big-brands-jumping-on-the-nft",
    });
    this.meta.updateTag({
      property: "og:description",
      content:
        "In this fast-paced NFT era, everyone is competing with each other to secure their place in the NFT space. Big brands are joining the bandwagon and boosting it's credibility. Here are 10 brands jumping into NFTs.",
    });
    this.meta.updateTag({ property: "og:type", content: "Website" });
    this.meta.updateTag({
      property: "og:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/big-ten-brands-in-nft.jpg",
    });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({
      name: "twitter:site",
      content: "https://www.blockchainx.tech/ten-big-brands-jumping-on-the-nft",
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: "10 Big Brands Jumping On The NFT",
    });
    this.meta.updateTag({
      name: "twitter:description",
      content:
        "In this fast-paced NFT era, everyone is competing with each other to secure their place in the NFT space. Big brands are joining the bandwagon and boosting it's credibility. Here are 10 brands jumping into NFTs.",
    });
    this.meta.updateTag({
      name: "twitter:image",
      content: "https://www.blockchainx.tech/assets-new/images/blog/big-ten-brands-in-nft.jpg",
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      "https://www.blockchainx.tech/ten-big-brands-jumping-on-the-nft"
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement("link");
    link.setAttribute("rel", "amphtml");
    link.setAttribute(
      "href",
      "https://www.blockchainx.tech/amp/ten-big-brands-jumping-on-the-nft"
    );
    this.doc.head.appendChild(link);
  }
}
