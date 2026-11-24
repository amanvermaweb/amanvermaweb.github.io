import Image from "next/image";

// Measured in a 900px square, with the entire, uncropped portrait as its coordinate system.
const outline = `
  M 433 49
  C 446 47 455 48 465 49
  Q 481 46 499 50
  L 513 52 508 47 523 53 528 54 538 61 548 61 558 68 564 68
  L 571 75 566 75 569 83 573 82 571 87 576 85 576 91 580 88 586 90
  Q 597 94 597 105
  L 602 108 601 111 609 114 610 123 615 125 615 129 622 135 624 142
  Q 633 152 635 166
  L 632 180 633 187 631 201 629 216
  Q 629 236 620 257
  Q 610 284 599 302
  L 580 330 567 348
  Q 562 349 564 363
  Q 582 369 598 377
  Q 608 379 618 391
  Q 633 415 648 446
  Q 669 463 694 483
  Q 718 508 745 523
  Q 760 532 775 547
  Q 790 558 796 579
  Q 801 599 796 630
  Q 795 649 790 667
  Q 786 691 782 709
  Q 786 724 779 743
  Q 792 767 797 790
  Q 802 807 801 843
  L 802 900 150 900
  Q 146 890 142 876
  L 136 861
  Q 135 879 131 886
  L 129 900 120 900 120 884
  Q 112 875 112 850
  L 112 817 108 813 110 799
  Q 110 793 105 790
  Q 87 784 79 772
  L 65 758
  Q 59 751 64 741
  L 69 735
  Q 62 725 65 710
  Q 61 700 67 690
  L 74 680
  Q 62 674 62 665
  Q 62 648 75 646
  L 98 649
  Q 98 643 93 636
  Q 84 623 85 608
  Q 85 585 101 573
  Q 113 564 130 566
  Q 150 567 160 583
  Q 173 601 170 617
  Q 167 630 157 643
  L 154 652
  Q 160 644 168 645
  Q 182 646 189 659
  L 198 676
  Q 202 676 202 666
  Q 204 647 210 636
  Q 215 630 224 624
  Q 230 616 234 609
  Q 248 605 260 583
  L 276 551 289 537 289 542
  Q 305 526 330 513
  L 355 499 375 485
  Q 399 473 421 448
  L 429 427
  Q 432 425 434 424
  Q 430 414 425 408
  Q 405 411 382 409
  Q 361 407 356 398
  Q 353 391 354 383
  Q 351 373 348 367
  Q 344 361 344 353
  Q 338 347 339 339
  Q 339 331 346 317
  Q 340 312 334 310
  L 330 306
  Q 316 307 311 301
  Q 304 292 299 278
  L 294 262 291 254 292 247
  Q 296 237 310 235
  Q 319 234 325 236
  L 325 220 324 215
  L 316 214 312 209 310 210 307 204 304 195 303 199 301 191
  L 302 180 296 190 298 177 295 183 300 165 296 173
  Q 302 153 309 142
  L 318 130 311 136 319 126 330 112
  Q 336 102 353 86
  L 348 84 356 79 365 74 378 71 389 69
  L 396 64 390 60 401 60 414 54 429 51
  Z
  M 302 254
  Q 314 254 328 254
  Q 331 264 337 274
  Q 332 282 330 291
  L 330 300
  Q 320 304 315 299
  Q 308 289 304 274
  Q 300 261 302 254
  Z
  M 299 247
  Q 306 237 322 238
  L 326 240 327 246
  Q 316 245 305 248
  Z
  M 229 778
  Q 241 776 250 777
  L 255 795 246 800 243 798
  Z
`;

export function Portrait({
  filename,
  name,
}: {
  filename: string;
  name: string;
}) {
  const src = `/assets/${filename}`;
  if (filename !== "aman.webp")
    return (
      <Image
        className="custom-portrait"
        src={src}
        alt={name}
        width={600}
        height={600}
        preload
      />
    );
  return (
    <div className="av-print">
      <svg
        className="av-print-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="av-portrait-contour" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(.001111111111111)"
              clipRule="evenodd"
              d={outline}
            />
          </clipPath>
        </defs>
      </svg>
      <div className="av-print-sun" aria-hidden="true" />
      <div className="av-print-person">
        <Image
          src={src}
          width={1440}
          height={1440}
          alt={`${name} holding a microphone`}
          preload
        />
      </div>
    </div>
  );
}
