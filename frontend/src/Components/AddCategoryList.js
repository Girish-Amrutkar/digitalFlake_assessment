import React, { useState } from "react";
import SideNavBar from "./SideNavBar";
import back from "../Assets/Category/back.png";
import { Link, useNavigate } from "react-router-dom";

export default function AddCategoryList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  // Function to Reset the category and navigate to category page
  const cancelCategory = () => {
    setName("");
    setDescription("");
    setStatus(true);
    navigate("/category");
  };

  // Function to save category by hitting API and storng data into DB and navigating to category page
  const saveCategory = async () => {
    if (name && description) {
      let result = await fetch("http://localhost:5000/add-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({
          name,
          description,
          status,
        }),
      });
      result = await result.json();
      if (result.message) {
        alert(result.message);
        navigate("/category");
      } else {
        navigate("/category");
      }
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div>
      <div
        style={{
          width: "1728px",
          height: "1117px",
          top: "-1699px",
          left: "-303px",
        }}
      >
        <SideNavBar />
        {/* Add Category List Component */}
        <div>
          <div
            style={{
              position: "absolute",
              width: "1230px",
              height: "962px",
              top: "132px",
              left: "464px",
              borderRadius: "10px",
              border: "1px solid #B0ADAD",
              color: "white",
              boxShadow: "0px 4px 10px 0px #00000040",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "16px",
                height: "16px",
                top: "33px",
                left: "15px",
              }}
            >
              <Link to="/category">
                <img src={back} />
              </Link>
            </div>
            <div
              style={{
                position: "absolute",
                width: "167px",
                height: "36px",
                top: "24px",
                left: "54px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "36px",
                color: "#000000",
                letterSpacing: "0.5px",
                alignItems: "center",
              }}
            >
              Add Category
            </div>
            <div>
              <form>
                <div
                  style={{
                    position: "absolute",
                    width: "380px",
                    height: "64px",
                    top: "109px",
                    left: "23px",
                  }}
                >
                  <div className="absolute top-[-8px] left-[0px] w-[380px] h-[64px]">
                    <div className="absolute top-[8px] left-[0px] rounded-8xs bg-white box-border w-[380px] h-[64px] overflow-hidden border-[1px] border-solid border-darkgray">
                      <input
                        type="text"
                        className="absolute top-[0px] left-[0px] w-[380px] h-[64px] text-4xl text-dimgray-200 font-p-posts"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "20px",
                          lineHeight: "48px",
                          color: "#717070",
                        }}
                      />
                    </div>
                    <div
                      className="absolute top-[0px] left-[12px] bg-white flex flex-row items-center justify-center py-0 px-1 text-8xl text-dimgray-200 font-inter"
                      style={{
                        width: "127px",
                        height: "16px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "16px",
                        color: "#1F1F1F",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <div
                        className="relative tracking-[0.15px] leading-[16px]"
                        style={{
                          fontFamily: "Inter",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "16px",
                          color: "#000000",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Category Name
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    width: "380px",
                    height: "64px",
                    top: "109px",
                    left: "425px",
                  }}
                >
                  <div className="absolute top-[-8px] left-[0px] w-[380px] h-[64px]">
                    <div className="absolute top-[8px] left-[0px] rounded-8xs bg-white box-border w-[380px] h-[64px] overflow-hidden border-[1px] border-solid border-darkgray">
                      <input
                        type="text"
                        className="absolute top-[0px] left-[0px] w-[380px] h-[64px] text-4xl text-dimgray-200 font-p-posts"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "20px",
                          lineHeight: "48px",
                          color: "#717070",
                        }}
                      />
                    </div>
                    <div
                      className="absolute top-[0px] left-[12px] bg-white flex flex-row items-center justify-center py-0 px-1 text-8xl text-dimgray-200 font-inter"
                      style={{
                        width: "127px",
                        height: "16px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "16px",
                        color: "#1F1F1F",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <div
                        className="relative tracking-[0.15px] leading-[16px]"
                        style={{
                          fontFamily: "Inter",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "16px",
                          color: "#000000",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Description
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    width: "380px",
                    height: "64px",
                    top: "109px",
                    left: "828px",
                  }}
                >
                  <div className="absolute top-[-8px] left-[0px] w-[380px] h-[64px]">
                    <div className="absolute top-[8px] left-[0px] rounded-8xs bg-white box-border w-[380px] h-[64px] overflow-hidden border-[1px] border-solid border-darkgray">
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={{
                          width: "380px",
                          height: "64px",
                          border: "1px solid #686868",
                        }}
                      >
                        <option value={true}>Active</option>
                        <option value={false}>Inactive</option>
                      </select>
                    </div>
                    <div
                      className="absolute top-[0px] left-[12px] bg-white flex flex-row items-center justify-center py-0 px-1 text-8xl text-dimgray-200 font-inter"
                      style={{
                        width: "127px",
                        height: "16px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "16px",
                        color: "#1F1F1F",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <div
                        className="relative tracking-[0.15px] leading-[16px]"
                        style={{
                          fontFamily: "Inter",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "16px",
                          lineHeight: "16px",
                          color: "#000000",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Status
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    width: "208px",
                    height: "55px",
                    top: "868px",
                    left: "999px",
                    borderRadius: "100px",
                    backgroundColor: "#662671",
                  }}
                >
                  <button
                    type="button"
                    onClick={saveCategory}
                    style={{
                      position: "absolute",
                      width: "66px",
                      height: "32px",
                      top: "11px",
                      left: "71px",
                      borderRadius: "100px",
                      backgroundColor: "#662671",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "32px",
                      alignContent: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Save
                  </button>
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "208px",
                    height: "55px",
                    top: "868px",
                    left: "747px",
                    borderRadius: "100px",
                    border: "1px solid #676767",
                  }}
                >
                  <button
                    type="button"
                    onClick={cancelCategory}
                    style={{
                      position: "absolute",
                      width: "66px",
                      height: "32px",
                      top: "11px",
                      left: "71px",
                      borderRadius: "100px",
                      backgroundColor: "white",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "32px",
                      alignContent: "center",
                      color: "#676767",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
