import { Component, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CanonicalService } from "../../../shared/canonical.service";

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent implements OnInit {

  title =
  "Blockchain healthcare - blockchain healthcare solutions and services | BlockchainX";
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
      "BlockchainX has been working on transforming the Healthcare industry with Blockchain by getting medical records, blood bank details, organ management, patient records to a secure private blockchain. Blockchain ensures that the confidential records are safe within the authorities and Blockchain records to reduce medical trafficking.",
  });
  this.meta.updateTag({
    name: "keywords",
    content: "Blockchain healthcare , healthcare blockchain , Blockchain in healthcare , blockchain and healthcare , medical blockchain",
  });
  this.meta.updateTag({ name: "author", content: "BlockchainX" });
  this.meta.updateTag({ name: "robots", content: "index, follow" });

  this.meta.updateTag({
    property: "og:title",
    content:
      "Blockchain healthcare - blockchain healthcare solutions and services | BlockchainX",
  });
  this.meta.updateTag({ property: "og:site_name", content: "BlockchainX" });
  this.meta.updateTag({
    property: "og:url",
    content: "https://www.blockchainx.tech/blockchain-in-healthcare",
  });
  this.meta.updateTag({
    property: "og:description",
    content:
      "BlockchainX has been working on transforming the Healthcare industry with Blockchain by getting medical records, blood bank details, organ management, patient records to a secure private blockchain. Blockchain ensures that the confidential records are safe within the authorities and Blockchain records to reduce medical trafficking.",
  });
  this.meta.updateTag({ property: "og:type", content: "Website" });
  this.meta.updateTag({
    property: "og:image",
    content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-health-care.jpg",
  });

  this.meta.updateTag({ name: "twitter:card", content: "summary" });
  this.meta.updateTag({
    name: "twitter:site",
    content: "https://www.blockchainx.tech/blockchain-in-healthcare",
  });
  this.meta.updateTag({
    name: "twitter:title",
    content:
      "Blockchain healthcare - blockchain healthcare solutions and services | BlockchainX",
  });
  this.meta.updateTag({
    name: "twitter:description",
    content:
      "BlockchainX has been working on transforming the Healthcare industry with Blockchain by getting medical records, blood bank details, organ management, patient records to a secure private blockchain. Blockchain ensures that the confidential records are safe within the authorities and Blockchain records to reduce medical trafficking.",
  });
  this.meta.updateTag({
    name: "twitter:image",
    content: "https://www.blockchainx.tech/assets-new/images/Industries/blockchain-in-health-care.jpg",
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    "https://www.blockchainx.tech/blockchain-in-healthcare"
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement("link");
  link.setAttribute("rel", "amphtml");
  link.setAttribute(
    "href",
    "https://www.blockchainx.tech/blockchain-in-healthcare"
  );
  this.doc.head.appendChild(link);
}

}
