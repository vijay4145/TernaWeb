import React, { useEffect, useState } from "react";
import Codefchef from "./Codefchef";
import { Typography } from "@mui/material";
import "./codersTab.css";
import Github from "./Github";
import GeeksForGeeks from "./GeeksForGeeks";
import geeksforgeeksIconLink from '../../lottie_animation/geeksforgeeks.png'

const CoderTabIndex = ({ setProgress }) => {
  const [platfrom, setPlatform] = useState(null); //codechef, github, geeksforgeeks
  const githubIconLink =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAQJElEQVR4nO1da1AUVxa+tWZjktofmz+7VdnK5mV2ozAo9miMz8RoNGpVHhWT3U2s3dooCoroJptsbW3C1iqCD0Rlk4jTM92JDOD4BGGYQQ1081ARBGZGXpGHgKDIQ0VEXnO3bjO6PGaY20MP3T30V3WqKApm+p7v9LnnnnvuuQAoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgeSRElTwVPKn1nlpQcUbUoOK96WHWI2mUIstPdRaZQq1NprCrB2mMGvvgFg60O+Mm6xVxo0lNvS3qessMalri4JOrCl8zbA670mxx6PADQzhtsdNwdY30kMsu02htnxzmLU7Y6sNCiGpa4v7SDVToFEzUVp19pL9U4yTFUIkgMzwzMeM60s+SN9YkmbaYusSivCMYXL8D4WQVLODpUNDMD8gYwgH8Gdi62HC4dRfS36ftqGENG223vIW6RmDJH7p+eEG8H8h2HrkGcjA3OfE1ovPw7y51N8catWbt9p6xoP4jK02mLa+BJKzXJA/RJge5BXiiMxXxNaTzyEtqESVHmIxm7ZY7eNFfIZDDr85ytvvRDQE26chmEStOvtFsfUme2T+ueYJFNQJGdDxkaPvX+JF/lBDYO5rCObf1KLMJ8TWoyyRElT8kWmz9boYxGdstcFjHxR4TP4wj1BJEsxbYutTNjCGVk5O32ghzVtHd/fn/lEK83ZfhWf/fkXYOX+DBerf4uf2sYRg4gzTbI+LrV9JIyXI8op5s9U2GkGZ/yqDtVktsL/XDhF6OvtgCV3nMeGmzVYu0Dv5p0KYsPwCZsDnqTAFcUTOS2LrWZJIDbJ8Ygqz3XNFFHrTrxpvwt6ufjgcyBjY/1SM+B/zFhtMXVcCT/yxEBrezYf6ZRfg9wtzIT0/B+rmZEPtbG+S7WJKULPtGiJrhdj6lhTSg61h5i22Xlfk5x+ohvduPoCj4UrSde5vjSEWePzDAqh/6wLUvZo97gST+CuFtWLrXRIwbize5mq+R299HdsK7QPeflRc2Fs1kLDxqgtnBfQEjB2tEsBEhjG4WOPqrc/eVgHv1N93zzyEsL26E1Jzc0QnlfRMIsFExOmgkt2uyC88WMsFd+5g74ew8vSN0VO1MhANwX4BJhJSgyyhrty+5XA9tPe59/l12a3ONmlkKRo1Y9cSzKdgokT7GVtsfc7ILz/R5Ha+77zVDc98fkV00kihhWB7SYJZCXwZyWuL/Fwt9cqONbp966symuHhxXnik6X2lidg2w/NZl4Avprhc5XkscY3jPrm9/fZYX5stegEkePjCfJ9MmNoDLHonZFf8F0NtPe7Zr/7bi+XzBGdGPU4egKCjQG+trHjLOhD2buee66j/fst3VyKVmxCyPE2ADVj95kNJFRQadpsrR+R5PmiFN5t6HJNfms3NLzn+XasD8hPPrGVnLqhJNaZ67/GtLh2+x298OTHl8UmAIotGoL5CsgZpzeU+jsr5rgUW+0y6EMbO6lBE2vOJ10bwH1ZVxYZg60ZzvL7aC3vCuf3XBVd8aSkhEkAcoQx2BJgDrP1DzcAlLodbZ0vvsJZye0cHprF/g7IDWnBluTh5Gd9VQ57u5xH/cgruCvA1H5RDunyLkg39kLK1AK1n5dBUsxNoLk53DOgZ+GeqaIL6r4sF94I1CwJ5ITT6y+/jI5cDTcAVMnjCmc+Gz29q32/ANKtdki3DxWqthvqDtRCcmHu+BE/PxfqIqogXf1gxPPQbXZIrhZ66cr0yOrcATq04SzydzX31+e1uVUCInmEsgcbQtUDqEMewcvk69AbX+WE+EGii62duNvGhtVwkjnM1uzMAO7Uj1z3oywgzq4e52ZHUfojQ8hoheTKfOEJWJkPKTPmM5haBP9+DcE0GFYbJgGpIzXIstrVPr8toWGEAdgSr2MpgLZ0Yimfkxt9UPftNagNskBtiA1qv67k3krdkSZIGW9B6lwbpPLuQKqgA9KFHZC6cGfgd+ktkDLcGPjb8Eqo3WjjPgN9Ft3Ui//9lk7veKBZ7JtA6kAHNUerwkX7/W1XO+Htmvuw4NtaqJ2NV7eHgixsAkQWqrHXOwagZmkg9ZM8uKd0+Wb66OZ+0YmlceVmn1cMQEMwd+OIgp8DqSJ5bfEqHPKR8C3jQtG+bDxAbbc38wLzgNzy/sMFlW7zrd6lcm/LxwDybk/M/YH0TdYiHANAdft8B65LbhadWBpT0LN6zQDU7I9AisgMsf3CvAXv3D46tMF34NTJm/IxgJM3BSf+m5kZcO/0ZBilMjyInmOQXs8i1JAJh3x0XAsdy+KlgAW5kK6RTwxA13QLlplExEepjsAIf/0j2alKmgmkBtSNC8cAPCnvovSN4pPaztML6BvHTP6+GaeHEP9QIv2PfAKkBmOwdT+OAaCDmnyUoF1v5fLrYhNKeyAokSQ0+QMGkLQdSA2otx6OAaBTutiKmM1C2sYjAygxoWyd3Bj4u32zS/KR7PDXHwVSgynUasEKAJfhB4DasCuik0iP1QuE8TvEolEzI+b8EaJKyAdSQ3qotRrHAL5fhB8cUWy76ATSY/UCbDsvA/hvoGl08v31cLsqoQxIDaYw6w0cA6DmYRZwLDkv27mfHixtdqjlkfWMnn7SrQFE+OvrgNRgDrPexTEA3CWg7m+l4pPXLoygseAagFv3jzyAn74NSA3OKoCcCW5bFh3d4DsGQDdgG8AOVaJ7D6DSdwM5GoAp1Io//2e2iU4cLZBQObexA0AM9y9RA9jsfgpALdhwDYC+3CE6cbRQUtmFNeZDRBaWAUhzCgh1HwTyOefnru5OTkJhFojEET/ieQApBoHGjRa3y0CuDx+uB7jZJzpxtFDSasca80HiHJ4HkOIyMH3T6Ikgzv3zqAHwKQO42SdIBvCRAfjr82WXCubbfpW+JqPdv3Y3UteDNeb9M1KxDECSqeC09SX7hWy8TBXfE5+4dmEEjQVnzNHTT2EZgCQ3g1I+LVovZMt13HMAchDKjHdOYGeAAcsAtvklrgFSw8m/XJ47ZM5fX8L7soXBovvmmujE0QIJGotQS0DOA6j0BJAaUlYVPHV6bUkPOuUjRMtW7Sab6MTRAgkai4ABoDRLwhA0BJM1FtKHyNwc7oSP2OTRQqwAMDbAYmYk4wWAqoQcIFWQajZcMANA08AJ+RSC0i4EjQEnBRypSsIygCj/hAggVZCzmIVCGoB2TbHoBNJjFO2aIgz3n4E9/0dMj38DSBWowSG6VFFQL5Au39WALr1FyBoAuN0/viN8mkHaTSTR3XmCeoFV+bI6GEo/lKZeqH3H/RL4EJEJI/wTMD1AQhKQOjRE1lIhDYDzAl+Wy+/t/xKvVUzMjBRs9799auLbQOpAd+lqCLZOcCPYUyOPErE2O/esOGMaWPvjvf3b/OJvyKJBBAJ3l67ABsAZwT8rIH1LusfEqZZ+rrEE7nhwl37c8i8gaR+QC3Rq5lmNmun2hhGgjh1cpzAJEE4PlvIuqF2HX/CCu/U7IPG9u/xOyOu6OZJgdN4wAE7m5gw0jZLClvGtfqjTNUDtAn5nAXcFHMU3AFVCPJAb0AWJqMmh14wAeYMVF6Huu2uQqh7/rWOqunugD9GKi7yf+0BgGn7g5xffFxOYOBXIEegWbW8awGCPoP2sFOqSmrxaSkahVnRJTQNl3h42qPxu5lkeyz60959wHMgVqLkhqWY6+ShIl9EK6YYerpCSSr3FdQcl+Rwnn8VC7UeF2C3daBzizS3cZ451gwtF/bgpX8fGT9fOGcdeBnKGRs1+zUdJqH3bCAKKOqD2XZ51BUvPC2YApADX0qF8/66AYzwCP4kWfvDF/inGyRqCKcdW1uLzkNLWj+jLh+Zc7Yc8jpbPznbaWtajgs7ZY7+Cds/0E7zI3+6nr5Hsti9foOtPuGtQeL7B1NnWoUZQdh+Sr+PdGqb9pGhcN3TIUd583FKvQTl/e5S/wbeukNMQ7D7eCpybM+KEMOr0iTMXo9WBYDFAXN0YyMfb6BkS+KkSvgW+BtTgUEOweXyViJZZwwtDdD9cd2sEVKFwJ4uoog6PAj6+c/6AJBSjaRP4IuKI7N+SBNPKV5ko0TKClB/boHaUbmOC7iA29fJe6uGc8nUS9d+RfdTvDhoiawV3TSofI3j7otM9AG5dHlU1sEJ4eOr4tRxIflgoHPntjjjg1WweSR78df7gdG+kv+E9MBFAzmI+5hsU6g5fd0+UF1PDWjcGgHL7vNK7w4K+HaqkEDCRgK5M5+UFFuVB6ifxNoFIF0tBNNfz2dVznu1LlG77V28C3YLBKyBcZxGta7h2mAdAlTwDxRwJYyNfTtu83gCpzgoj1Uw/9lQQbIV0fY8oBqBRM1wB58DSbmzEc2t9lSFKbP1LAqSaXcNdjITrCZZfhNSp5nGpENK19MKDDXdhzMwUGInTvgVP+iL9k0LF1rukQBLMSo2abec1Jbx7aWA7GO0foNPEHhgE1dbPkaxt7obkjS6O7G+qW+D+ikYYbamBUZfKOYkIGNsbP0huT5ho35M8gSfJoiHbwiE259e5Ocg+WH8H7iu/DncXV8GdhZWPCHYnQhjAdj99yZ6ARPldAjmeCF+U+RiqKeS9d+Cmwyh6sxHpuIRHCWgAaL6PDEg85LMZPq9tIBFspUdGMD93CPmxV5s9Jj5qrAbgp6/2uY2d8dw/QKsEjZq9x8sAZrGCkh/lgQGgYo4d/ok7w5+jnhBbj7IHukId3aKNXWPoMIBDjfcEIT+KhwGgGj5UxhUdaJgitt58DodmMy+Qama/hmC7cAxgT0n1OBpAfG+kKsmwd/pRP7H15PPgdhVRFpFg650awDuXYNz1DsHIj7pUDncsOe6K/EaUzYtUHXtRbL1MOKBjaOg6VXSjJrpUkSP/tWxInW6GByqaBDWAyLgLMCIw4dEp3R2qxCPorB56BrH1oIC7tNowSbu6YL4usSmZutLZEW2pFYz8nZcqYPSZ8q6Y2OKs3UvS31cCOxkg9tS1Zw7+cDVo/+Fyat/RsovRBlt9dMqVu3vOlj3Yda60b2d2mT0qtwwiQT+j3+0+U/pgT7Lt7t6jV+pijpblo/+NpSuC0GeJPR4FChQoUKBAgQIFChQomJhAPXKeAgA8DQD4NQDgWQAAyrmj8/MBAIBAAIAaADAHALAAAPA6AGAxAGApAGDZIFkOAFg1TJYP+5uljv993fFZcxyfHej4rqmO737W8SxPO55NHn18JAykxF8BAJ4HAExzKH2hC9KkKssdz6x2jOF5x5h847CngEBND3/jUNIcx5u3ysdlmWOs0xxjl3bjRy+94ej40zwAwEoJELJKZFnp0MXLDt34LCY75k+FdDCqMQT6qleYL4G3TS4yH/ggFAMAE9sAlCkATOwp4CGUIBA4DQKn+HoQ6AzI0p9xJFUm2jJwqmPsPv22e4InfSQRtEBJBAmPSQ4D+eWgVPBLLlLBKJBa5EjnLh6W5nXmaZYNk4f/hz4DfZazVDD6bvQMyGDRM6Fnk1Uq+H9hDr3lT2IxMgAAAABJRU5ErkJggg==";
  const codechefIconLink =
    "https://vijay4145.github.io/portfolio/static/media/codechef2.9b516424bb723c3d6d8a.png";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const platform_ = urlParams.get("platform");
    console.log(platform_);
    if (platform_ === null) setPlatform("codechef");
    else setPlatform(platform_);
    setProgress(100);
  }, []);

  const openLink = (platform)=>{
    const currentURL = (window.location.href).split('?')[0];
    const urlWithQuery = `${currentURL}?platform=${platform}`;
    window.open(urlWithQuery, '_self');
  }

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Top Coders of Terna
      </Typography>
      <div className="flex gap-2">
        <span onClick={()=>openLink('codechef')}>

        <Typography
          variant="subtitle1"
          gutterBottom
          className={`platforms-option ${
              platfrom === "codechef"
              ? "bg-purple-200 hover:bg-purple-300"
              : "hover:bg-purple-50"
            }`}
            >
          <img src={codechefIconLink} className="h-6 w-6" />
          Codechef
        </Typography>
            </span>

        <span onClick={()=>openLink('github')}>

        <Typography
          variant="subtitle1"
          gutterBottom
          className={`platforms-option ${
              platfrom === "github"
              ? "bg-purple-200 hover:bg-purple-300"
              : "hover:bg-purple-50"
            }`}
            >
          <img src={githubIconLink} className="h-6 w-6" />
          Github
        </Typography>
        </span>
        <span onClick={()=>openLink('geeksforgeeks')}>
            <Typography
            variant="subtitle1"
            gutterBottom
            className={`platforms-option ${
                platfrom === "geeksforgeeks"
                ? "bg-purple-200 hover:bg-purple-300"
                : "hover:bg-purple-50"
            }`}
            >
            <img src={geeksforgeeksIconLink} className="h-5 w-8" />
            GeeksForGeeks
            </Typography>
        </span>
      </div>
      {platfrom === 'codechef' && <Codefchef/>}
      {platfrom === 'github' && <Github/>}
      {platfrom === 'geeksforgeeks' && <GeeksForGeeks/>}
    </div>
  );
};

export default CoderTabIndex;
