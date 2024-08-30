import {
  random as $random,
  formatTextToSlugify,
  sampleSize,
} from "@randomkits/utils";

const ChinaPhoneNumber = {
  name: "ChinaPhoneNumber",
  slug: () => formatTextToSlugify(ChinaPhoneNumber.name),

  random: ({ num = 6 }: { num?: number }) => {
    const phones: string[] = [];
    const begin = ["13", "14", "15", "17", "18", "19", "16"];
    new Array(num).fill(0).map(() => {
      const phone =
        sampleSize(begin, 1)[0] + Math.random().toString().slice(2, 12);
      phones.push(phone);
    });

    return phones;
  },
};

export default ChinaPhoneNumber;
