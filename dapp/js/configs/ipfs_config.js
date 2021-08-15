const ipfs_gateway = "localhost";
const ipfs_port = 5001;

const ipfs = window.IpfsHttpClient.create({
  host: ipfs_gateway,
  port: ipfs_port,
  protocol: "http",
});

console.log("IPFS Object Initialize : ");
console.log(ipfs);

async function test() {
  const { cid } = await ipfs.add("Hello world!");

  console.log("***ipfs CID***", cid);
}

test();

// use this for cors setting in ipfs
//$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"http://localhost:3000\"]"
//$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods "[\"PUT\", \"POST\", \"GET\"]"
