import React, { useEffect, useState } from "react";
import SideNavBar from "./SideNavBar";
import logo from "../Assets/Category/categorylogo.png";
import search from "../Assets/Category/search.png";
import { Link } from "react-router-dom";
import edit from "../Assets/Category/edit.png";
import deleteIcon from "../Assets/Category/delete.png";
import Swal from "sweetalert2";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  // Function to delete the selected category by hitting API and deleting data from DB
  const deleteCategory = async (id) => {
    let result = await fetch(`http://localhost:5000/delete-category/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    getCategoryList();
  };

  // Function to get category list to be populated in table
  const getCategoryList = async () => {
    let result = await fetch("http://localhost:5000/category-list", {
      method: "get",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();

    setCategoryList(result);
  };

  return (
    <div
      style={{
        width: "1728px",
        height: "1117px",
        top: "-1699px",
        left: "-303px",
      }}
    >
      <SideNavBar />
      {/* Category List Component */}
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
          <div>
            <div
              style={{
                position: "absolute",
                width: "30px",
                height: "30px",
                top: "23px",
                left: "26px",
              }}
            >
              <img src={logo} />
            </div>
            <div
              style={{
                position: "absolute",
                width: "119px",
                height: "36px",
                top: "20px",
                left: "81px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "36px",
                color: "#000000",
                letterSpacing: "0.5px",
              }}
            >
              Category
            </div>
            <div
              style={{
                position: "absolute",
                width: "563px",
                height: "40px",
                top: "20px",
                left: "295px",
                borderRadius: "10px",
                border: "1px solid #B0ADAD",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  top: "10px",
                  left: "15px",
                }}
              >
                <img src={search} />
              </div>
              <input
                type="text"
                style={{
                  position: "absolute",
                  width: "508px",
                  height: "30px",
                  top: "5px",
                  left: "45px",
                }}
              />
            </div>
            <button
              type="button"
              style={{
                position: "absolute",
                width: "110px",
                height: "40px",
                top: "21px",
                left: "1100px",
                borderRadius: "10px",
                backgroundColor: "#662671",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#FFFFFF",
              }}
            >
              <Link
                to="/addCategory"
                style={{ color: "white", textDecoration: "none" }}
              >
                Add New
              </Link>
            </button>
          </div>
          {/* Table */}
          <div
            style={{
              position: "absolute",
              width: "1230px",
              height: "800px",
              top: "80px",
            }}
          >
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead style={{ backgroundColor: "#FFF8B7" }}>
                      <tr>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#000000",
                            alignContent: "center",
                          }}
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#000000",
                            alignContent: "center",
                          }}
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#000000",
                            alignContent: "center",
                          }}
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#000000",
                            alignContent: "center",
                          }}
                        >
                          Status
                        </th>
                        <th scope="col" className="p-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {categoryList.map((category) => (
                        <tr
                          key={category._id}
                          style={{ backgroundColor: "#F2F2F2" }}
                        >
                          <td
                            style={{
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "24px",
                              color: "#000000",
                            }}
                          >
                            {category._id}
                          </td>
                          <td
                            style={{
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "24px",
                              color: "#000000",
                            }}
                          >
                            {category.name}
                          </td>
                          <td
                            style={{
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "16px",
                              lineHeight: "24px",
                              color: "#000000",
                            }}
                          >
                            {category.description}
                          </td>
                          {category.status ? (
                            <td
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#2DA323",
                              }}
                            >
                              Active
                            </td>
                          ) : (
                            <td
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#B13129",
                              }}
                            >
                              Inactive
                            </td>
                          )}
                          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                            <Link
                              to="/editCategory"
                              style={{ display: "inline-flex" }}
                            >
                              <img src={edit} />
                            </Link>
                            <button
                              type="button"
                              onClick={() => {
                                Swal.fire({
                                  title: "Delete",
                                  text: "Are you sure you want to delete ?",
                                  icon: "warning",
                                  showCancelButton: true,
                                  cancelButtonColor: "#676767",
                                  confirmButtonColor: "#662671",
                                  confirmButtonText: "Confirm",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    deleteCategory(category._id);
                                  }
                                });
                              }}
                              style={{ display: "inline-flex" }}
                            >
                              <img src={deleteIcon} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
