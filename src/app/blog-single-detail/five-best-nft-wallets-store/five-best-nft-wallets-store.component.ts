import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-five-best-nft-wallets-store',
  templateUrl: './five-best-nft-wallets-store.component.html',
  styleUrls: ['./five-best-nft-wallets-store.component.css']
})
export class FiveBestNftWalletsStoreComponent implements OnInit {

  title =
    'Best NFT Wallet - Store Your Collectibles In Secured NFT Digital Wallet';
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
      name: 'description',
      content:
        'NFTs, unlike real-time assets, which have their unique qualities in the virtual world, require a unique NFT wallet to safely and securely store them. They need to be guarded by abiding by the blockchain norms. Check out the top best digital wallets for NFTs in this blog',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'wallets for NFTs, best NFT wallet, digital wallet for nft, best crypto wallet for NFT, NFT digital wallet',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Best NFT Wallet - Store Your Collectibles In Secured NFT Digital Wallet',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/five-best-nft-wallets-store-transact-digital-collectibles',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'NFTs, unlike real-time assets, which have their unique qualities in the virtual world, require a unique NFT wallet to safely and securely store them. They need to be guarded by abiding by the blockchain norms. Check out the top best digital wallets for NFTs in this blog',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://blockchainx.tech/assets-new/images/blog-new/five-best-nft-wallets-store-transact-digital-collectibles.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/five-best-nft-wallets-store-transact-digital-collectibles',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Best NFT Wallet - Store Your Collectibles In Secured NFT Digital Wallet',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'NFTs, unlike real-time assets, which have their unique qualities in the virtual world, require a unique NFT wallet to safely and securely store them. They need to be guarded by abiding by the blockchain norms. Check out the top best digital wallets for NFTs in this blog',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://blockchainx.tech/assets-new/images/blog-new/five-best-nft-wallets-store-transact-digital-collectibles.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/five-best-nft-wallets-store-transact-digital-collectibles'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/five-best-nft-wallets-store-transact-digital-collectibles'
    );
    this.doc.head.appendChild(link)
;
  }


}
